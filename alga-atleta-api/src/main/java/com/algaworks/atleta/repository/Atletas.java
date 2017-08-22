package com.algaworks.atleta.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.algaworks.atleta.model.Atleta;

public interface Atletas extends JpaRepository<Atleta, Long> {
	
}