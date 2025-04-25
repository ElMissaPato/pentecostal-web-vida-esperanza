
import React, { useEffect, useRef, useState } from 'react';
import { distritos, Iglesia } from '../data/distritos';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, Map as MapIcon } from 'lucide-react';

const MapComponent = ({ selectedDistrict = "" }) => {
  const [apiKey, setApiKey] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedChurch, setSelectedChurch] = useState<Iglesia | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    // In a real app, we'd use env vars or fetch this from a secure location
    if (!apiKey) {
      setApiKey("YOUR_MAPBOX_TOKEN"); // This should be replaced with your actual token
    }

    if (apiKey && !mapLoaded && mapRef.current) {
      setLoading(true);
      
      // Load Mapbox script
      const script = document.createElement('script');
      script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js';
      script.async = true;
      script.onload = () => {
        initializeMap();
        setLoading(false);
      };
      document.body.appendChild(script);

      // Load Mapbox CSS
      const link = document.createElement('link');
      link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css';
      link.rel = 'stylesheet';
      document.head.appendChild(link);

      return () => {
        document.body.removeChild(script);
        document.head.removeChild(link);
      };
    }
  }, [apiKey, mapLoaded]);

  useEffect(() => {
    if (mapLoaded && mapInstanceRef.current) {
      // Clear previous markers
      markersRef.current.forEach(marker => marker.remove());
      markersRef.current = [];

      // Add new markers based on selected district or all districts
      let churchesToShow: Iglesia[] = [];
      
      if (selectedDistrict) {
        const districtData = distritos[selectedDistrict];
        if (districtData) {
          churchesToShow = districtData.Churchs;
        }
      } else {
        // Show all churches from all districts
        Object.values(distritos).forEach(distrito => {
          churchesToShow = [...churchesToShow, ...distrito.Churchs];
        });
      }
      
      // Add markers to map
      churchesToShow.forEach(church => {
        if (church.coordinates) {
          addMarker(church);
        }
      });
      
      // Fit the map to show all markers
      if (markersRef.current.length > 0) {
        const bounds = new (window as any).mapboxgl.LngLatBounds();
        
        churchesToShow.forEach(church => {
          if (church.coordinates) {
            bounds.extend([church.coordinates.lng, church.coordinates.lat]);
          }
        });
        
        mapInstanceRef.current.fitBounds(bounds, {
          padding: 50,
          maxZoom: 12
        });
      }
    }
  }, [selectedDistrict, mapLoaded]);

  const initializeMap = () => {
    if (!mapRef.current || typeof (window as any).mapboxgl === 'undefined') return;
    
    (window as any).mapboxgl.accessToken = apiKey;
    
    const map = new (window as any).mapboxgl.Map({
      container: mapRef.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-103.5, 25.5], // Center on northern Mexico
      zoom: 5
    });
    
    map.addControl(new (window as any).mapboxgl.NavigationControl({
      showCompass: true,
      visualizePitch: true
    }));
    
    map.on('load', () => {
      mapInstanceRef.current = map;
      setMapLoaded(true);
      
      // Add atmospheric effects
      if (map.setFog) {
        map.setFog({
          'color': 'rgb(255, 255, 255)',
          'high-color': 'rgb(200, 200, 225)',
          'horizon-blend': 0.2
        });
      }
    });
  };
  
  const addMarker = (church: Iglesia) => {
    if (!mapInstanceRef.current || !church.coordinates) return;
    
    // Create custom marker element
    const el = document.createElement('div');
    el.className = 'flex items-center justify-center';
    el.style.width = '30px';
    el.style.height = '30px';
    el.style.borderRadius = '50%';
    el.style.background = 'linear-gradient(to bottom, #6047AA, #B76E00)';
    el.style.border = '2px solid white';
    el.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
    el.style.cursor = 'pointer';
    el.style.display = 'flex';
    el.style.alignItems = 'center';
    el.style.justifyContent = 'center';
    
    const iconEl = document.createElement('div');
    iconEl.innerHTML = `<svg width="16" height="16" stroke="white" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M9 4v16M15 4v16M21 10v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8m18 0V6a2 2 0 00-2-2H5a2 2 0 00-2 2v4m18 0H3"></path>
    </svg>`;
    el.appendChild(iconEl);
    
    // Create a popup
    const popupContent = `
      <div class="px-3 py-2">
        <div class="font-bold text-primary">${church.Name || "Iglesia sin nombre"}</div>
        <div class="text-sm">${church.Pastor}</div>
        <div class="text-xs text-gray-600">${church.Location}</div>
      </div>
    `;
    
    const popup = new (window as any).mapboxgl.Popup({ 
      offset: 25,
      closeButton: false,
      className: 'custom-popup'
    }).setHTML(popupContent);

    // Create and add marker
    const marker = new (window as any).mapboxgl.Marker(el)
      .setLngLat([church.coordinates.lng, church.coordinates.lat])
      .setPopup(popup)
      .addTo(mapInstanceRef.current);
    
    el.addEventListener('click', () => {
      setSelectedChurch(church);
    });
    
    // Add animation to marker
    el.addEventListener('mouseenter', () => {
      el.style.transform = 'scale(1.2)';
      el.style.transition = 'transform 0.2s ease';
    });
    
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'scale(1)';
    });
    
    markersRef.current.push(marker);
  };

  // Add this to inject custom styles for the popup
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .custom-popup .mapboxgl-popup-content {
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        border-top: 3px solid #6047AA;
      }
      .custom-popup .mapboxgl-popup-tip {
        border-top-color: #6047AA;
        border-bottom-color: #6047AA;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="relative w-full">
      <div
        ref={mapRef}
        className="w-full h-[500px] rounded-xl shadow-xl overflow-hidden border border-gray-200"
      />
      
      {loading && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center rounded-xl">
          <Loader2 className="h-8 w-8 text-primary animate-spin mb-2" />
          <p className="text-gray-600">Cargando mapa...</p>
        </div>
      )}
      
      {!apiKey && !loading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col items-center justify-center rounded-xl p-6">
          <MapIcon className="h-16 w-16 text-primary/30 mb-4" strokeWidth={1} />
          <h3 className="text-xl font-medium text-gray-700 mb-4">Para ver el mapa, ingresa tu token de Mapbox</h3>
          <div className="w-full max-w-md">
            <input
              type="text"
              placeholder="Ingresa tu token de Mapbox"
              className="px-4 py-2 border-2 border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/30 rounded-md w-full transition-all duration-200"
              onChange={(e) => setApiKey(e.target.value)}
            />
            <p className="text-sm text-gray-500 mt-2">
              Puedes obtener un token en <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
            </p>
          </div>
        </div>
      )}
      
      {selectedChurch && (
        <Card className="mt-4 animate-fade-in overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col">
              <div className="h-1.5 bg-gradient-to-r from-primary to-secondary"></div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">{selectedChurch.Name || "Iglesia sin nombre"}</h3>
                    <p className="text-gray-700">Pastor: {selectedChurch.Pastor}</p>
                    <p className="text-sm text-primary font-medium">{selectedChurch.Type}</p>
                    <p className="text-sm text-gray-600">{selectedChurch.Location}</p>
                  </div>
                  <button 
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                    onClick={() => setSelectedChurch(null)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MapComponent;
