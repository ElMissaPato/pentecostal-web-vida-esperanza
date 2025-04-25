
import React, { useEffect, useRef, useState } from 'react';
import { distritos, Iglesia } from '../data/distritos';
import { Card, CardContent } from '@/components/ui/card';

const MapComponent = ({ selectedDistrict = "" }) => {
  const [apiKey, setApiKey] = useState("");
  const [mapLoaded, setMapLoaded] = useState(false);
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
      // Load Mapbox script
      const script = document.createElement('script');
      script.src = 'https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js';
      script.async = true;
      script.onload = initializeMap;
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
    
    map.addControl(new (window as any).mapboxgl.NavigationControl());
    
    map.on('load', () => {
      mapInstanceRef.current = map;
      setMapLoaded(true);
    });
  };
  
  const addMarker = (church: Iglesia) => {
    if (!mapInstanceRef.current || !church.coordinates) return;
    
    // Create a popup
    const popup = new (window as any).mapboxgl.Popup({ offset: 25 }).setHTML(
      `<div class="font-semibold">${church.Name}</div>
       <div class="text-sm">${church.Pastor}</div>
       <div class="text-xs">${church.Location}</div>`
    );

    // Create and add marker
    const marker = new (window as any).mapboxgl.Marker({
      color: '#8B5CF6'
    })
    .setLngLat([church.coordinates.lng, church.coordinates.lat])
    .setPopup(popup)
    .addTo(mapInstanceRef.current);
    
    marker.getElement().addEventListener('click', () => {
      setSelectedChurch(church);
    });
    
    markersRef.current.push(marker);
  };

  return (
    <div className="relative w-full">
      <div
        ref={mapRef}
        className="w-full h-[500px] rounded-lg shadow-md overflow-hidden"
      />
      
      {!apiKey && (
        <div className="absolute inset-0 bg-gray-100 flex flex-col items-center justify-center rounded-lg">
          <p className="text-gray-600 mb-4">Para ver el mapa, ingresa tu token de Mapbox</p>
          <input
            type="text"
            placeholder="Ingresa tu token de Mapbox"
            className="px-4 py-2 border rounded-md w-64 max-w-full"
            onChange={(e) => setApiKey(e.target.value)}
          />
        </div>
      )}
      
      {selectedChurch && (
        <Card className="mt-4">
          <CardContent className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{selectedChurch.Name}</h3>
                <p>Pastor: {selectedChurch.Pastor}</p>
                <p className="text-sm text-gray-600">{selectedChurch.Type}</p>
                <p className="text-sm text-gray-600">{selectedChurch.Location}</p>
              </div>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedChurch(null)}
              >
                X
              </button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MapComponent;
