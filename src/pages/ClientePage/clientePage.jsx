import React, { useState } from 'react';
import HeaderComp from '../../components/header'
import './clientePage.css'

const clientReview = [
    {
        "nombre": "Laura Martínez",
        "comentario": "Excelente servicio y atención. Las motos están en perfecto estado y el personal es muy amable. Definitivamente volveré.",
        "fecha": "2024-08-15"
    },
    {
        "nombre": "Javier Gómez",
        "comentario": "Las bicicletas de montaña son increíbles. Disfruté cada minuto en las rutas. Recomendado para los amantes del ciclismo.",
        "fecha": "2024-08-20"
    },
    {
        "nombre": "Ana Rodríguez",
        "comentario": "Muy buena experiencia. El proceso de alquiler fue rápido y fácil. Las scooters son ideales para moverse por la ciudad.",
        "fecha": "2024-08-25"
    },
    {
        "nombre": "Carlos Fernández",
        "comentario": "Gran variedad de motos y bicicletas. El equipo es muy profesional y te asesoran en todo momento. 100% recomendable.",
        "fecha": "2024-09-01"
    },
    {
        "nombre": "María López",
        "comentario": "Alquilé una bigtrail para un viaje largo y no tuve ningún problema. La moto estaba en perfectas condiciones.",
        "fecha": "2024-09-05"
    },
    {
        "nombre": "Miguel Sánchez",
        "comentario": "Las bicicletas de montaña son de alta calidad y muy cómodas. Perfectas para explorar los senderos de la región.",
        "fecha": "2024-09-10"
    },
    {
        "nombre": "Elena Martínez",
        "comentario": "El servicio es excelente y el personal es muy atento. La moto que alquilé estaba nueva y funcionó a la perfección.",
        "fecha": "2024-09-12"
    },
    {
        "nombre": "Pedro González",
        "comentario": "Me sorprendió la calidad de las scooters. Muy fáciles de manejar y perfectas para moverse por Sitges.",
        "fecha": "2024-09-15"
    },
    {
        "nombre": "Isabel Ruiz",
        "comentario": "Tuve una experiencia fantástica con la bicicleta de montaña. Las rutas recomendadas fueron espectaculares.",
        "fecha": "2024-09-18"
    },
    {
        "nombre": "David Pérez",
        "comentario": "La atención al cliente es sobresaliente. Me ayudaron a elegir la moto adecuada para mi viaje y todo salió genial.",
        "fecha": "2024-09-20"
    }
]

function ClientePage() {

  return (
    <>
    <HeaderComp/>
    
    </>
  );
}

export default ClientePage;