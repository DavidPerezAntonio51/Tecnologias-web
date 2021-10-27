/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.cv13id5idp1;

/**
 *
 * @author Sab
 */
public class Pregunta {
    private String ID;
    private String Texto;
    private String Respuesta;
    private String Cantidad;
    private Target Target;
    private Drag Drag;

    public Pregunta() {
    }

    public String getCantidad() {
        return Cantidad;
    }

    public String getID() {
        return ID;
    }

    public String getRespuesta() {
        return Respuesta;
    }

    public String getTexto() {
        return Texto;
    }

    public void setCantidad(String Cantidad) {
        this.Cantidad = Cantidad;
    }

    public void setDrag(Drag Drag) {
        this.Drag = Drag;
    }

    public void setID(String ID) {
        this.ID = ID;
    }

    public void setRespuesta(String Respuesta) {
        this.Respuesta = Respuesta;
    }

    public void setTarget(Target Target) {
        this.Target = Target;
    }

    public void setTexto(String Texto) {
        this.Texto = Texto;
    }
}
