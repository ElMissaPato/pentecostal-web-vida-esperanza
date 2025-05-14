
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ChevronLeft,
  Search,
  Home, 
  LogOut, 
  Plus, 
  Edit, 
  Trash
} from "lucide-react";
import { pastores, obtenerDistritos } from "../../data/pastores";

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPastores, setFilteredPastores] = useState(pastores);
  const [filterDistrito, setFilterDistrito] = useState("");
  const navigate = useNavigate();
  const distritos = obtenerDistritos();

  useEffect(() => {
    // Verificar autenticación
    const authData = localStorage.getItem("admin_auth");
    if (!authData) {
      navigate("/admin-idpmi");
      return;
    }
    
    const { isAdmin, timestamp } = JSON.parse(authData);
    const expirationTime = 3600000; // 1 hora en milisegundos
    
    if (isAdmin && Date.now() - timestamp < expirationTime) {
      setIsAuthenticated(true);
    } else {
      localStorage.removeItem("admin_auth");
      navigate("/admin-idpmi");
    }
  }, [navigate]);

  useEffect(() => {
    // Filtrar pastores según término de búsqueda y distrito
    const result = pastores.filter(pastor => {
      const matchesSearch = pastor.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           pastor.iglesias.some(iglesia => 
                             iglesia.nombre.toLowerCase().includes(searchTerm.toLowerCase())
                           );
      const matchesDistrito = filterDistrito ? pastor.distrito === filterDistrito : true;
      
      return matchesSearch && matchesDistrito;
    });
    
    setFilteredPastores(result);
  }, [searchTerm, filterDistrito]);

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    navigate("/");
  };

  if (!isAuthenticated) {
    return <div>Redireccionando...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-primary text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-serif">Panel Administrativo IDPMI</h1>
          <div className="flex gap-3">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate("/")}
              className="text-white hover:bg-primary-800"
            >
              <Home className="h-4 w-4 mr-2" />
              Sitio Web
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={handleLogout}
              className="text-white hover:bg-primary-800"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow p-4 md:p-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h2 className="text-2xl font-serif text-primary">Administrar Pastores</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Nuevo Pastor
            </Button>
          </div>
          
          <Card className="mb-6">
            <CardContent className="p-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Buscar por nombre o iglesia..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="md:w-64">
                  <select
                    value={filterDistrito}
                    onChange={(e) => setFilterDistrito(e.target.value)}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2"
                  >
                    <option value="">Todos los distritos</option>
                    {distritos.map((distrito) => (
                      <option key={distrito} value={distrito}>
                        {distrito}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Grado</TableHead>
                    <TableHead>Distrito</TableHead>
                    <TableHead>Iglesia(s)</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPastores.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-6 text-gray-500">
                        No se encontraron pastores con los filtros aplicados
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredPastores.map((pastor) => (
                      <TableRow key={pastor.id}>
                        <TableCell className="font-medium">{pastor.nombre}</TableCell>
                        <TableCell>{pastor.grado}</TableCell>
                        <TableCell>
                          <span className="whitespace-nowrap">{pastor.distrito.split(' ')[1]}</span>
                        </TableCell>
                        <TableCell>
                          {pastor.iglesias.map((iglesia, i) => (
                            <div key={i} className="mb-1 last:mb-0">
                              <span className="font-medium">{iglesia.nombre}</span>
                              <span className="text-xs text-gray-500 ml-2">({iglesia.tipo})</span>
                            </div>
                          ))}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                              <Trash className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </Card>
        </div>
      </main>
      
      <footer className="bg-gray-100 border-t p-4">
        <div className="container mx-auto text-center text-gray-600 text-sm">
          Panel Administrativo IDPMI Región Nor-Centro &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default AdminPanel;
