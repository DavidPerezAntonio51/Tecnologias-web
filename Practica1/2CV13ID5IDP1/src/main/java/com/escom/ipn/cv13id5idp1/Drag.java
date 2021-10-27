/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.cv13id5idp1;

import java.util.ArrayList;
import java.util.Collection;

/**
 *
 * @author Sab
 */
public class Drag {
    private Collection Opciones;
            
    public Drag() {
        this.Opciones = new ArrayList<Opciones>();
    }

    public Collection getOpciones() {
        return Opciones;
    }

    public void setOpciones(Opciones Opciones) {
        this.Opciones.add(Opciones);
    }
    
    
}
