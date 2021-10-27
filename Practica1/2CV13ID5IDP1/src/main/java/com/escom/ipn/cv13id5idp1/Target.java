/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.cv13id5idp1;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

/**
 *
 * @author Sab
 */
public class Target {
    Collection Opciones;
    
    public Target() {
        Opciones = new ArrayList<Opciones>();
    }

    public Collection getOpciones() {
        return Opciones;
    }

    public void setOpciones(Opciones opciones) {
        this.Opciones.add(opciones);
    }
}
