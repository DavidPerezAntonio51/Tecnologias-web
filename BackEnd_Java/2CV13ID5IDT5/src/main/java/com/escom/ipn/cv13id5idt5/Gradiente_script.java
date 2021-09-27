
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
    private String Color1 = "";
    private String Color2 = "";
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
    public void setColors(String Color1, String Color2){
        this.Color1 = Color1;
        this.Color2 = Color2;
    }
    private String CreateGradient(){
        String Script = "";
        switch(Direccion1){
            case 1:
                switch (Direccion2){
                    case 0:
                        Script = "var grd = ctx.createLinearGradient("+this.Intensidad_Gradiente+",0,0,0);";
                    break;
                    case 1:
                        Script = "var grd = ctx.createLinearGradient("+this.Intensidad_Gradiente+",0,0,0);";
                    break;
                    case 2:
                        Script = "var grd = ctx.createLinearGradient("+this.Intensidad_Gradiente+","+this.Intensidad_Gradiente+",0,0);";
                    break;
                    case 3:
                        Script = "var grd = ctx.createLinearGradient("+this.Intensidad_Gradiente+",0,"+this.Intensidad_Gradiente+",0);";
                    break;
                    case 4:
                        Script = "var grd = ctx.createLinearGradient("+this.Intensidad_Gradiente+",0,0,"+this.Intensidad_Gradiente+");";
                    break;
                }
            break;
            case 2:
                switch (Direccion2){
                    case 0:
                        Script = "var grd = ctx.createLinearGradient(0,"+this.Intensidad_Gradiente+",0,0);";
                    break;
                    case 1:
                        Script = "var grd = ctx.createLinearGradient("+this.Intensidad_Gradiente+","+this.Intensidad_Gradiente+",0,0);";
                    break;
                    case 2:
                        Script = "var grd = ctx.createLinearGradient(0,"+this.Intensidad_Gradiente+",0,0);";
                    break;
                    case 3:
                        Script = "var grd = ctx.createLinearGradient(0,"+this.Intensidad_Gradiente+","+this.Intensidad_Gradiente+",0);";
                    break;
                    case 4:
                        Script = "var grd = ctx.createLinearGradient(0,"+this.Intensidad_Gradiente+",0,"+this.Intensidad_Gradiente+");";
                    break;
                }
            break;
            case 3:
                switch (Direccion2){
                    case 0:
                        Script = "var grd = ctx.createLinearGradient(0,0,"+this.Intensidad_Gradiente+",0);";
                    break;
                    case 1:
                        Script = "var grd = ctx.createLinearGradient("+this.Intensidad_Gradiente+",0,"+this.Intensidad_Gradiente+",0);";
                    break;
                    case 2:
                        Script = "var grd = ctx.createLinearGradient(0,"+this.Intensidad_Gradiente+","+this.Intensidad_Gradiente+",0);";
                    break;
                    case 3:
                        Script = "var grd = ctx.createLinearGradient(0,0,"+this.Intensidad_Gradiente+",0);";
                    break;
                    case 4:
                        Script = "var grd = ctx.createLinearGradient(0,0,"+this.Intensidad_Gradiente+","+this.Intensidad_Gradiente+");";
                    break;
                }
            break;
            case 4:
                switch (Direccion2){
                    case 0:
                        Script = "var grd = ctx.createLinearGradient(0,0,0,"+this.Intensidad_Gradiente+");";
                    break;
                    case 1:
                        Script = "var grd = ctx.createLinearGradient("+this.Intensidad_Gradiente+",0,0,"+this.Intensidad_Gradiente+");";
                    break;
                    case 2:
                        Script = "var grd = ctx.createLinearGradient(0,"+this.Intensidad_Gradiente+",0,"+this.Intensidad_Gradiente+");";
                    break;
                    case 3:
                        Script = "var grd = ctx.createLinearGradient(0,0,"+this.Intensidad_Gradiente+","+this.Intensidad_Gradiente+");";
                    case 4:
                        Script = "var grd = ctx.createLinearGradient(0,0,0,"+this.Intensidad_Gradiente+");";
                    break;
                }
            break;
        }
        return Script;
    }
    public String getAncho(){
        return String.valueOf(this.Ancho+10);
    }
    public String getLargo(){
        return String.valueOf(this.Largo+10);
    }
    
    @Override
    public String toString() {
        return "<script>\n" +
        "var c = document.getElementById(\"Gradiente\");\n" +
        "var ctx = c.getContext(\"2d\");\n" +
        "// Create gradient\n" +
        CreateGradient() +
        "grd.addColorStop(0,\""+this.Color1+"\");\n" +
        "grd.addColorStop(1,\""+this.Color2+"\");\n" +
        "// Fill with gradient\n" +
        "ctx.fillStyle = grd;\n" +
        "ctx.fillRect(5,5,"+Ancho+","+Largo+");\n" +
"       </script>";
    }
}
