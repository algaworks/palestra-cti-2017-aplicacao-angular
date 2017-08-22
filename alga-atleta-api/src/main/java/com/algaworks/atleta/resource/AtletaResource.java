package com.algaworks.atleta.resource;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.algaworks.atleta.model.Atleta;
import com.algaworks.atleta.model.validation.CriarRecursoGroup;
import com.algaworks.atleta.repository.Atletas;

@RestController
@RequestMapping("/atletas")
public class AtletaResource {
	
	@Autowired
	private Atletas atletas;
	
	@GetMapping
	public List<Atleta> listar() {
		return atletas.findAll();
	}
	
	@GetMapping("/{id}")
	public Atleta buscar(@PathVariable Long id) {
		return atletas.findOne(id);
	}
	
	@PostMapping
	public Atleta criar(@RequestBody @Validated(CriarRecursoGroup.class) Atleta atleta){
		return atletas.save(atleta);
	}
	
	@PutMapping("/{id}")
	public Atleta alterar(@PathVariable Long id, @RequestBody @Valid Atleta atleta) {
		Atleta existente = atletas.findOne(id);
		
		BeanUtils.copyProperties(atleta, existente, "id");
		
		return atletas.save(existente);
	}
	
	@DeleteMapping("/{id}")
	public void remover(@PathVariable Long id) {
		atletas.delete(atletas.findOne(id));
	}
}