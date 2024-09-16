import React, { useState } from 'react';
import Footer from '../../components/footer'
import HeaderComp from '../../components/header'
import './clientePage.css'
//https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg
const clientReview = [
    {
        "img":"https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        "nombre": "Laura Martínez",
        "comentario": "Excelente servicio y atención. Las motos están en perfecto estado y el personal es muy amable. Definitivamente volveré.",
        "fecha": "2024-08-15"
    },
    {
        "img":"https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        "nombre": "Javier Gómez",
        "comentario": "Las bicicletas de montaña son increíbles. Disfruté cada minuto en las rutas. Recomendado para los amantes del ciclismo.",
        "fecha": "2024-08-20"
    },
    {
        "img":"https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        "nombre": "Ana Rodríguez",
        "comentario": "Muy buena experiencia. El proceso de alquiler fue rápido y fácil. Las scooters son ideales para moverse por la ciudad.",
        "fecha": "2024-08-25"
    },
    {
        "img":"https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        "nombre": "Carlos Fernández",
        "comentario": "Gran variedad de motos y bicicletas. El equipo es muy profesional y te asesoran en todo momento. 100% recomendable.",
        "fecha": "2024-09-01"
    },
    {
        "img":"https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        "nombre": "María López",
        "comentario": "Alquilé una bigtrail para un viaje largo y no tuve ningún problema. La moto estaba en perfectas condiciones.",
        "fecha": "2024-09-05"
    },
    {
        "img":"https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        "nombre": "Miguel Sánchez",
        "comentario": "Las bicicletas de montaña son de alta calidad y muy cómodas. Perfectas para explorar los senderos de la región.",
        "fecha": "2024-09-10"
    },
    {
        "img":"https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        "nombre": "Elena Martínez",
        "comentario": "El servicio es excelente y el personal es muy atento. La moto que alquilé estaba nueva y funcionó a la perfección.",
        "fecha": "2024-09-12"
    },
    {
        "img":"https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        "nombre": "Pedro González",
        "comentario": "Me sorprendió la calidad de las scooters. Muy fáciles de manejar y perfectas para moverse por Sitges.",
        "fecha": "2024-09-15"
    },
    {
        "img":"https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        "nombre": "Isabel Ruiz",
        "comentario": "Tuve una experiencia fantástica con la bicicleta de montaña. Las rutas recomendadas fueron espectaculares.",
        "fecha": "2024-09-18"
    },
    {
        "img":"https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
        "nombre": "David Pérez",
        "comentario": "La atención al cliente es sobresaliente. Me ayudaron a elegir la moto adecuada para mi viaje y todo salió genial.",
        "fecha": "2024-09-20"
    }
]

function ClientePage() {

  return (
    <>
      <HeaderComp />
      <section className="container-cliente">
        {clientReview.map((review, index) => (
          <div className="card-cliente" key={index}>
            <img src={review.img} alt="" />
           <div className="text-cliente">
           <p><strong>Nombre:</strong> {review.nombre}</p>
            <p><strong>Comentario:</strong> {review.comentario}</p>
            <p><strong>Fecha:</strong> {review.fecha}</p>
           </div>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}

export default ClientePage;