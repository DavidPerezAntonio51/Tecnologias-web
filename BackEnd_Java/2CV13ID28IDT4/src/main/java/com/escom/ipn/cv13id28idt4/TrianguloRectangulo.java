package com.escom.ipn.cv13id28idt4;

import java.io.Console;
import java.util.Map;
import javax.ws.rs.WebApplicationException;

/**
 *
 * @author DEZKS
 */
public class TrianguloRectangulo {
    final Integer ANGULO = 90;
    private Integer Angulo1 = 0;
    private Integer Angulo2 = 0;
    private Integer CatetoOpuesto = 0;
    private Integer CatetoAdyacente = 0;
    private Integer Hipotenusa = 0;
    private Map<String,String[]> Datos = null;
    public TrianguloRectangulo(){
    }
    
    public void setData(Map<String, String[]> datos){
        llenar(datos);
    }
    
    private void llenar(Map<String, String[]> datos){
        if(String.valueOf(datos.get("Angulo1")[0]).equals("")){
            this.Angulo1 = Integer.parseInt(String.valueOf(datos.get("Angulo1")[0]));
        }
        if(String.valueOf(datos.get("Angulo2")[0]).equals("")){
            this.Angulo2 = Integer.parseInt(String.valueOf(datos.get("Angulo2")[0]));
        }
        if(String.valueOf(datos.get("CatetoOpuesto")[0]).equals("")){
            this.CatetoOpuesto = Integer.parseInt(String.valueOf(datos.get("CatetoOpuesto")[0]));
        }
        if(String.valueOf(datos.get("CatetoAdyacente")[0]).equals("")){
            this.CatetoAdyacente = Integer.parseInt(String.valueOf(datos.get("CatetoAdyacente")[0]));
        }
        if(String.valueOf(datos.get("Hipotenusa")[0]).equals("")){
            this.Hipotenusa = Integer.parseInt(String.valueOf(datos.get("Hipotenusa")[0]));
        }
    }
    
    
    public Boolean sePuedeResolver(){
        if((Angulo1!=0 || Angulo2!=0) && (CatetoOpuesto!=0 || CatetoAdyacente!=0 || Hipotenusa!=0)){
            return true;
        }
        if((CatetoOpuesto!=0 && CatetoAdyacente!=0) || (CatetoOpuesto!=0 && Hipotenusa!=0) || (CatetoAdyacente!=0 && Hipotenusa!=0)){
            return true;
        }
        return false;
    }
}
