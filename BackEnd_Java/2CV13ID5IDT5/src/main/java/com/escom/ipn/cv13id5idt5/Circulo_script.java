/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.cv13id5idt5;

/**
 *
 * @author DEZKS
 */
public class Circulo_script {
    Integer Radio = 0;
    String id = "";
    Integer Lados = 10;
    public Circulo_script(Integer radio) {
        this.Radio = radio;
        this.Lados = this.Lados + radio;
    }
    public Circulo_script(String id, Integer radio) {
        this.Radio = radio;
        this.id = id;
        this.Lados = this.Lados + radio;
    }

    @Override
    public String toString() {
        return "<script> var c = document.getElementById(\"Circulo\"); var ctx = c.getContext(\"2d\"); ctx.beginPath(); ctx.arc("+this.Lados+","+this.Lados+","+this.Radio+",0,2*Math.PI); ctx.stroke(); </script>";
    }
    public String toString(String id, Integer radio) {
        return "<script> var c = document.getElementById(\""+id+"\"); var ctx = c.getContext(\"2d\"); ctx.beginPath(); ctx.arc(1"+this.Lados+","+this.Lados+","+this.Radio+",0,2*Math.PI); ctx.stroke(); </script>";
    }
}
