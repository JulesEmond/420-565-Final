package com.lacouf.al420565final.controller;

import com.lacouf.al420565final.ClientFactory;
import com.lacouf.al420565final.model.Client;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ClientController {

    @GetMapping("/all")
    public List<Client> getAll(){
        return ClientFactory.getClients();
    }

    @GetMapping("/hommes")
    public List<Client> getHommes(){
        return ClientFactory.getClients()
                .stream()
                .filter(c -> c.getGender().equals("M"))
                .collect(Collectors.toList());
    }

    @GetMapping("/ontariens")
    public List<Client> getOntariens(){
        return ClientFactory.getClients()
                .stream()
                .filter(c -> c.getProvince().equals("ON"))
                .collect(Collectors.toList());
    }
}
