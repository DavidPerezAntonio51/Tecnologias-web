/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package administrador_sevlets;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author SaBinoDios
 */
@WebServlet(name = "Servlet2", urlPatterns = {"/Servlet2"})
public class Servlet2 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Imagenes</title>");      
            out.println("<link rel='stylesheet' href='./cssvol3.css'>");
            out.println("</head>");
            out.println("<body>");
            
            
            
            //--------------------Imagenes
            
            out.println("<img id=\"0\" src=\"Imagenes/grito2.jpg\" alt=\"\"/>");
            out.println("<img id=\"1\" src=\"Imagenes/Eva2.jpg\" alt=\"\"/>");
            out.println("<img id=\"2\" src=\"Imagenes/amazon2.jpg\" alt=\"\"/>");
            out.println("<img id=\"3\" src=\"Imagenes/skz2.jpg\" alt=\"\"/>");
            out.println("<img id=\"4\" src=\"Imagenes/Saint2.jpg\" alt=\"\"/>");
            
            //--------------Combobox
            
            out.println(" <br></br>");
            out.println("<select form='Imag' id='Imagen' name='Imag'>");
            out.println("<option value='0' selected>1 Grito</option>");   
            out.println("<option value='1'>2 Evangelion</option>");
            out.println("<option value='2'>3 Amazon</option>");
            out.println("<option value='3'>4 StrayKids</option>");
            out.println("<option value='4'>5 SaintSeiya</option>");
            out.println("</select>");
            out.println(" <br></br>");
            
            out.println("<canvas id=\"myCanvas\" width=\"245\" height=\"285\"></canvas>");
            out.println("<p><button onclick=\"getOption()\">Dibujar</button></p>");
            out.println("<script>\n" +
            "function getOption() {\n" +
            "  var c = document.getElementById(\"myCanvas\");\n" +
            "  var ctx = c.getContext(\"2d\");\n" +
            "  var combobox = document.getElementById(\"Imagen\");\n" +
            "  console.log(\"'\"+combobox.value+\"'\");\n"+
            "  const id = combobox.value;\n"+
            "  var img = document.getElementsByTagName('img')[id];\n"+
            "  ctx.drawImage(img,10,10);\n" +
            "}\n" +
            "</script>");
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
