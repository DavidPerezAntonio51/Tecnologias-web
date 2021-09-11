package com.escom.ipn.cv13id28idt4;

import java.util.Map;
import java.lang.Math;

/**
 *
 * @author DEZKS
 */
public class TrianguloRectangulo {
    final Integer ANGULO = 90;
    private Double Angulo1 = Double.valueOf(0);
    private Double Angulo2 = Double.valueOf(0);
    private Double CatetoOpuesto = Double.valueOf(0);
    private Double CatetoAdyacente = Double.valueOf(0);
    private Double Hipotenusa = Double.valueOf(0);
    private Map<String,String[]> Datos = null;
    public TrianguloRectangulo(){
    }
    
    public void setData(Map<String, String[]> datos){
        llenar(datos);
    }
    
    private void llenar(Map<String, String[]> datos){
        if(!String.valueOf(datos.get("Angulo1")[0]).equals("")){
            this.Angulo1 = Double.parseDouble(String.valueOf(datos.get("Angulo1")[0]));
        }
        if(!String.valueOf(datos.get("Angulo2")[0]).equals("")){
            this.Angulo2 = Double.parseDouble(String.valueOf(datos.get("Angulo2")[0]));
        }
        if(!String.valueOf(datos.get("CatetoOpuesto")[0]).equals("")){
            this.CatetoOpuesto = Double.parseDouble(String.valueOf(datos.get("CatetoOpuesto")[0]));
        }
        if(!String.valueOf(datos.get("CatetoAdyacente")[0]).equals("")){
            this.CatetoAdyacente = Double.parseDouble(String.valueOf(datos.get("CatetoAdyacente")[0]));
        }
        if(!String.valueOf(datos.get("Hipotenusa")[0]).equals("")){
            this.Hipotenusa = Double.parseDouble(String.valueOf(datos.get("Hipotenusa")[0]));
        }
    }
    
    private Double determinaAngulos(){
        if(this.Angulo1!=0){
            this.Angulo2 = ANGULO - this.Angulo1;
            return Angulo1;
        }
        if(this.Angulo2!=0){
            this.Angulo1 = ANGULO - this.Angulo2;
            return Angulo2;
        }
        return Double.valueOf(0);
    }
    
    private void determinaAngulos(Integer F){
        if(F==1){
            this.Angulo1 = Math.asin(CatetoOpuesto/Hipotenusa);
            this.Angulo2 = ANGULO - Angulo1;
        }
        if(F==2){
            this.Angulo1 = Math.acos(CatetoAdyacente/Hipotenusa);
            this.Angulo2 = ANGULO - Angulo1;
        }
        if(F==3){
            this.Angulo1 = Math.atan(CatetoOpuesto/CatetoAdyacente);
            this.Angulo2 = ANGULO - Angulo1;
        }
    }
    
    private void determinaCatetos(Double A){
        if(this.CatetoOpuesto!=0){
            this.Hipotenusa = this.CatetoOpuesto/Math.sin(A);
            this.CatetoAdyacente = this.CatetoOpuesto/Math.tan(A);
        }
        if(this.CatetoAdyacente!=0){
            this.Hipotenusa = this.CatetoAdyacente/Math.cos(A);
            this.CatetoOpuesto = this.CatetoAdyacente*Math.tan(A);
        }
        if(this.Hipotenusa!=0){
            this.CatetoAdyacente = this.Hipotenusa*Math.cos(A);
            this.CatetoOpuesto = this.Hipotenusa*Math.sin(A);
        }
    }
    
    private Integer determinaCatetos(){
        if(this.CatetoAdyacente==0){
            this.CatetoAdyacente = Math.sqrt(Math.pow(Hipotenusa, 2)-Math.pow(CatetoOpuesto, 2));
            return 1;
        }
        if(this.CatetoOpuesto==0){
            this.CatetoOpuesto = Math.sqrt(Math.pow(Hipotenusa, 2)-Math.pow(CatetoAdyacente, 2));
            return 2;
        }
        if(this.Hipotenusa==0){
            this.Hipotenusa = Math.sqrt(Math.pow(CatetoAdyacente, 2)+Math.pow(CatetoOpuesto, 2));
            return 3;
        }
        return 0;
    }
    
    private void useMetodo1(){
        Double A = determinaAngulos();
        determinaCatetos(A);
    }
    
    private void useMetodo2(){
        Integer F = determinaCatetos();
        determinaAngulos(F);
    }
    
    public Boolean sePuedeResolver(){
        if((Angulo1!=0 || Angulo2!=0) && (CatetoOpuesto!=0 || CatetoAdyacente!=0 || Hipotenusa!=0)){
            useMetodo1();
            return true;
        }
        if((CatetoOpuesto!=0 && CatetoAdyacente!=0) || (CatetoOpuesto!=0 && Hipotenusa!=0) || (CatetoAdyacente!=0 && Hipotenusa!=0)){
            useMetodo2();
            return true;
        }
        return false;
    }
}
