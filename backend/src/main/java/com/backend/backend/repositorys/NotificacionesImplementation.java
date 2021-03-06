package com.backend.backend.repositorys;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificacionesImplementation extends JpaRepository<Notificaciones, Integer> {
    
    @Query("select n from Notificaciones n where n.remitente.userName = ?1")
    List<Notificaciones> findAllByRemitenteID(String id);
   
    @Query("select n from Notificaciones n where n.destinatario.userName = ?1")
    List<Notificaciones> findAllByDestinatarioID(String id);

}
