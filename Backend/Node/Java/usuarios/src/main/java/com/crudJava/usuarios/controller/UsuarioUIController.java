package com.crudJava.usuarios.controller;

import com.crudJava.usuarios.model.Usuario;
import com.crudJava.usuarios.service.UsuarioService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/ui/usuarios")
public class UsuarioUIController {

    private final UsuarioService usuarioService;

    public UsuarioUIController(UsuarioService usuarioService) {
        this.usuarioService = usuarioService;
    }

    @GetMapping
    public String listarUsuarios(Model model) {
        model.addAttribute("usuarios", usuarioService.getAllUsuarios());
        model.addAttribute("usuario", new Usuario());
        return "usuarios";
    }

    @GetMapping("/editar/{id}")
    public String editarUsuario(@PathVariable Long id, Model model) {
        Usuario usuario = usuarioService.getUsuarioById(id).orElse(new Usuario());
        model.addAttribute("usuario", usuario);
        model.addAttribute("usuarios", usuarioService.getAllUsuarios());
        return "usuarios";
    }


    @PostMapping("/guardar")
    public String guardarUsuario(@ModelAttribute Usuario usuario) {
        usuarioService.createUsuario(usuario);
        return "redirect:/ui/usuarios";
    }

    @GetMapping("/eliminar/{id}")
    public String eliminarUsuario(@PathVariable Long id) {
        usuarioService.deleteUsuario(id);
        return "redirect:/ui/usuarios";
    }
}
