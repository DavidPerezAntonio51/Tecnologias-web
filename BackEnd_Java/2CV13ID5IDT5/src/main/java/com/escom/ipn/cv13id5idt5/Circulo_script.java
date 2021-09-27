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
    private Integer Radio = 0;
    private String id = "";
    private Integer Lados = 10;
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
        if(id.equals("")){
            return "<script> var c = document.getElementById(\"Circulo\"); var ctx = c.getContext(\"2d\"); ctx.beginPath(); ctx.arc("+this.Lados+","+this.Lados+","+this.Radio+",0,2*Math.PI); ctx.stroke(); </script>";
        }
        return "<script> var c_"+this.id+" = document.getElementById(\""+this.id+"\");\n var ctx_"+this.id+" = c_"+this.id+".getContext(\"2d\");\n ctx_"+this.id+".beginPath();\n ctx_"+this.id+".arc("+this.Lados+","+this.Lados+","+this.Radio+",0,2*Math.PI);\n ctx_"+this.id+".stroke();\n </script>";
    }
    public String toStringVariable(String id, Integer radio) {
        return "<script> var c_"+this.id+" = document.getElementById(\""+this.id+"\"); var ctx_"+this.id+" = c_"+this.id+".getContext(\"2d\"); ctx_"+this.id+".beginPath(); ctx_"+this.id+".arc(1"+this.Lados+","+this.Lados+","+this.Radio+",0,2*Math.PI); ctx_"+this.id+".stroke(); </script>";
    }
}
