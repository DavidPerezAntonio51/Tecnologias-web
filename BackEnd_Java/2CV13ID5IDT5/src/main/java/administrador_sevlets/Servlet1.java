/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package administrador_sevlets;

import com.escom.ipn.cv13id5idt5.Circulo_script;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.StringTokenizer;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author DEZKS
 */
public class Servlet1 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Radio</title>"); 
            out.println("<link rel='stylesheet' href='./cssvol2.css'>");
            out.println("</head>");
            out.println("<body>");
        if(String.valueOf(request.getParameter("Radio")).equals("")){
            out.println("No se ha introducido ningun Radio, intentalo de nuevo");
        }else{
            try{
                Integer radio = Integer.valueOf(request.getParameter("Radio"));
                Circulo_script Circulo = new Circulo_script(radio);
                out.println("<canvas id=\"Circulo\" width=\""+(radio+10)*2+"\" height=\""+(radio+10)*2+"\" style=\"border:1px solid #d3d3d3;\"> </canvas>");
                out.println(Circulo);
            }catch(NumberFormatException e){
                StringTokenizer Numeros = new StringTokenizer(request.getParameter("Radio"), ",");
                Circulo_script[] Circulos = new Circulo_script[Numeros.countTokens()];
                out.println(Numeros.countTokens());
                for(int i=0; i<Numeros.countTokens();i++){
                    Integer radio = Integer.valueOf(Numeros.nextToken());
                    String id = "Circulo"+i;
                    Circulos[i] = new Circulo_script(id,radio);
                    out.println("<canvas id=\""+id+"\" width=\""+(radio+10)*2+"\" height=\""+(radio+10)*2+"\" style=\"border:1px solid #d3d3d3;\"> </canvas>");
                }
                for(int i=0;i<Circulos.length;i++){
                    out.println(Circulos[i]);
                }
                System.out.println(e);
            }
        }
            /************************************************************************************/
            /*****************************Boton para Regresar************************************/
            /************************************************************************************/
            out.println("<div>");
            out.println("<form method=\"Get\" action=\"Inicio\" id=\"Inicio\">");
            out.println("<input type=\"submit\" name=\"Inicio\" value=\"Regresar\" form=\"Inicio\"/>");
            out.println("</form>");
            out.println("</div>");
            out.println("</body>");
            out.println("</html>");
        }
    }
}
