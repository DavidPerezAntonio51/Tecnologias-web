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
public class Preguntas {
    private Collection Preguntas;

    public Preguntas() {
        this.Preguntas = new ArrayList();
    }

    public void setPreguntas(ID_Pregunta Pregunta) {
        Preguntas.add(Pregunta);
    }

    public Collection getPreguntas() {
        return Preguntas;
    }
    
}
