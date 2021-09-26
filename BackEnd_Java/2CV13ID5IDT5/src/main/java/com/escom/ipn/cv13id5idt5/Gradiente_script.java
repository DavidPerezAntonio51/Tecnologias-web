
package com.escom.ipn.cv13id5idt5;

/**
 *
 * @author DEZKS
 */
public class Gradiente_script {
    private Integer Direccion1 = 0;
    private Integer Direccion2 = 0;
    private Integer Intensidad_Gradiente = 0;
    private Integer Ancho = 0;
    private Integer Largo = 0;
    public Gradiente_script() {
        
    }
    public void setDireccion(Integer direccion1, Integer direccion2){
        this.Direccion1 = direccion1;
        this.Direccion2 = direccion2;
    }
    public void setIntesidad(Integer Grad){
        this.Intensidad_Gradiente = Grad;
    }
    public void setAncho(Integer Ancho){
        this.Ancho = Ancho;
    }
    public void setLargo(Integer Largo){
        this.Largo = Largo;
    }

    @Override
    public String toString() {
        return "<script>\n" +
        "var c = document.getElementById(\"Gradiente\");\n" +
        "var ctx = c.getContext(\"2d\");\n" +
        "// Create gradient\n" +
        "var grd = ctx.createLinearGradient(000,000,00,100);\n" +
        "grd.addColorStop(0,\"red\");\n" +
        "grd.addColorStop(1,\"white\");\n" +
        "// Fill with gradient\n" +
        "ctx.fillStyle = grd;\n" +
        "ctx.fillRect(10,10,200,100);\n" +
"       </script>";
    }
}
