
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useToast } from "@/components/ui/use-toast";
import { 
  ChevronLeft,
  Search,
  Home, 
  LogOut, 
  Plus, 
  Edit, 
  Trash,
  Image,
  Save
} from "lucide-react";
import { pastores, obtenerDistritos, Pastor, Iglesia } from "../../data/pastores";

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPastores, setFilteredPastores] = useState(pastores);
  const [filterDistrito, setFilterDistrito] = useState("");
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [currentPastor, setCurrentPastor] = useState<Pastor | null>(null);
  const [tempImageFile, setTempImageFile] = useState<File | null>(null);
  const [tempImagePreview, setTempImagePreview] = useState<string | null>(null);
  const { toast } = useToast();
  
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

  const handleEditClick = (pastor: Pastor) => {
    setCurrentPastor({...pastor});
    setTempImagePreview(pastor.foto || null);
    setIsEditDialogOpen(true);
  };

  const handleSavePastor = () => {
    if (!currentPastor) return;

    // En un caso real, aquí enviaríamos los cambios al backend
    // Como no tenemos backend, simularemos la actualización
    
    // Si hay una imagen nueva, normalmente la subiríamos a un servidor
    // y obtendríamos una URL. Aquí simularemos ese proceso con un FileReader
    if (tempImageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // En un caso real, esto sería la URL del servidor donde se subió la imagen
        const imageUrl = reader.result as string;
        
        // Simular actualización en la base de datos
        const updatedPastores = pastores.map(p => 
          p.id === currentPastor.id ? {...currentPastor, foto: imageUrl} : p
        );
        
        // Mostrar mensaje de éxito
        toast({
          title: "Pastor actualizado",
          description: `Se ha actualizado la información de ${currentPastor.nombre}`,
        });
        
        setIsEditDialogOpen(false);
        // En un caso real, actualizaríamos el estado desde el backend
        console.log("Pastor actualizado con foto:", {...currentPastor, foto: imageUrl});
      };
      reader.readAsDataURL(tempImageFile);
    } else {
      // Simular actualización sin cambio de imagen
      // Mostrar mensaje de éxito
      toast({
        title: "Pastor actualizado",
        description: `Se ha actualizado la información de ${currentPastor.nombre}`,
      });
      
      setIsEditDialogOpen(false);
      console.log("Pastor actualizado:", currentPastor);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) { // 5MB limit
      toast({
        title: "Error",
        description: "La imagen no debe superar los 5MB",
        variant: "destructive"
      });
      return;
    }

    setTempImageFile(file);

    // Crear preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setTempImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleIglesiasChange = (value: string, index: number, field: keyof Iglesia) => {
    if (!currentPastor) return;
    
    const updatedIglesias = [...currentPastor.iglesias];
    updatedIglesias[index] = {
      ...updatedIglesias[index],
      [field]: value
    };
    
    setCurrentPastor({
      ...currentPastor,
      iglesias: updatedIglesias
    });
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
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8 border">
                              {pastor.foto ? (
                                <AvatarImage src={pastor.foto} alt={pastor.nombre} />
                              ) : (
                                <AvatarFallback className="text-xs bg-primary/10 text-primary">
                                  {pastor.nombre.split(' ').map(n => n[0]).join('').substring(0, 2)}
                                </AvatarFallback>
                              )}
                            </Avatar>
                            <span>{pastor.nombre}</span>
                          </div>
                        </TableCell>
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
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => handleEditClick(pastor)}
                            >
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
      
      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Editar Pastor</DialogTitle>
            <DialogDescription>
              Actualiza la información del pastor. Haz clic en guardar cuando hayas terminado.
            </DialogDescription>
          </DialogHeader>
          
          {currentPastor && (
            <div className="grid gap-6 py-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="nombre">Nombre</Label>
                      <Input 
                        id="nombre" 
                        value={currentPastor.nombre}
                        onChange={(e) => setCurrentPastor({...currentPastor, nombre: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="grado">Grado</Label>
                      <Select 
                        value={currentPastor.grado}
                        onValueChange={(value) => setCurrentPastor({...currentPastor, grado: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un grado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="6">6</SelectItem>
                          <SelectItem value="Ordenado">Ordenado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="distrito">Distrito</Label>
                      <Select 
                        value={currentPastor.distrito}
                        onValueChange={(value) => setCurrentPastor({...currentPastor, distrito: value})}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona un distrito" />
                        </SelectTrigger>
                        <SelectContent>
                          {distritos.map((distrito) => (
                            <SelectItem key={distrito} value={distrito}>
                              {distrito}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center justify-start gap-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-md relative">
                    {tempImagePreview ? (
                      <img src={tempImagePreview} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-primary/10 text-primary text-2xl font-serif">
                        {currentPastor.nombre.split(' ').map(name => name[0]).join('')}
                      </div>
                    )}
                  </div>
                  
                  <div className="text-center">
                    <Label htmlFor="foto" className="cursor-pointer">
                      <div className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-sm">
                        <Image className="h-4 w-4" />
                        <span>Cambiar foto</span>
                      </div>
                      <Input 
                        id="foto" 
                        type="file" 
                        accept="image/*"
                        className="hidden" 
                        onChange={handleImageChange}
                      />
                    </Label>
                    {tempImageFile && (
                      <p className="mt-2 text-xs text-gray-500">{tempImageFile.name}</p>
                    )}
                  </div>
                </div>
              </div>
              
              <div>
                <Label>Información de Contacto</Label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div>
                    <Label htmlFor="telefono">Teléfono</Label>
                    <Input 
                      id="telefono" 
                      value={currentPastor.contacto.telefono || ""}
                      onChange={(e) => setCurrentPastor({
                        ...currentPastor, 
                        contacto: {...currentPastor.contacto, telefono: e.target.value}
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="correo">Correo</Label>
                    <Input 
                      id="correo" 
                      value={currentPastor.contacto.correo || ""} 
                      onChange={(e) => setCurrentPastor({
                        ...currentPastor, 
                        contacto: {...currentPastor.contacto, correo: e.target.value}
                      })}
                    />
                  </div>
                  <div>
                    <Label htmlFor="direccionCasa">Dirección Casa</Label>
                    <Input 
                      id="direccionCasa" 
                      value={currentPastor.contacto.direccionCasa || ""}
                      onChange={(e) => setCurrentPastor({
                        ...currentPastor, 
                        contacto: {...currentPastor.contacto, direccionCasa: e.target.value}
                      })}
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <Label>Iglesias</Label>
                {currentPastor.iglesias.map((iglesia, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3 p-3 border rounded-md">
                    <div>
                      <Label htmlFor={`iglesia-nombre-${index}`}>Nombre</Label>
                      <Input 
                        id={`iglesia-nombre-${index}`} 
                        value={iglesia.nombre}
                        onChange={(e) => handleIglesiasChange(e.target.value, index, 'nombre')}
                      />
                    </div>
                    <div>
                      <Label htmlFor={`iglesia-tipo-${index}`}>Tipo</Label>
                      <Select 
                        value={iglesia.tipo}
                        onValueChange={(value: any) => handleIglesiasChange(value, index, 'tipo')}
                      >
                        <SelectTrigger id={`iglesia-tipo-${index}`}>
                          <SelectValue placeholder="Selecciona un tipo" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Iglesia Organizada">Iglesia Organizada</SelectItem>
                          <SelectItem value="Misión">Misión</SelectItem>
                          <SelectItem value="Campo Blanco">Campo Blanco</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor={`iglesia-ubicacion-${index}`}>Ubicación</Label>
                      <Input 
                        id={`iglesia-ubicacion-${index}`} 
                        value={iglesia.ubicacion}
                        onChange={(e) => handleIglesiasChange(e.target.value, index, 'ubicacion')}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <Label htmlFor="biografia">Biografía</Label>
                <Textarea 
                  id="biografia" 
                  value={currentPastor.biografia || ""} 
                  onChange={(e) => setCurrentPastor({...currentPastor, biografia: e.target.value})}
                  className="min-h-[100px]"
                />
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancelar</Button>
            <Button onClick={handleSavePastor}>
              <Save className="h-4 w-4 mr-2" />
              Guardar
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <footer className="bg-gray-100 border-t p-4">
        <div className="container mx-auto text-center text-gray-600 text-sm">
          Panel Administrativo IDPMI Región Nor-Centro &copy; {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  );
};

export default AdminPanel;
