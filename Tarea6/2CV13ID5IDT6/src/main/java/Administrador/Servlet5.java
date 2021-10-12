/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Administrador;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author DEZKS
 */
public class Servlet5 extends HttpServlet {
    /*--------------Se deja texto predeterminado para uso futuro-------------*/
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Servlet1</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Servlet1 at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String texto = request.getParameter("texto");
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>TextArea</title>");
        out.println("</head>");
        out.println("<body>");
        try{
        Integer rows = Integer.valueOf(request.getParameter("rows"));
        Integer cols = Integer.valueOf(request.getParameter("col"));
        out.println("<h1> A continuacion se muestra el TextArea con el texto especificado</h1>");
        out.println("<br></br>");
        out.println("<textarea rows=\""+rows+"\" cols=\""+cols+"\">");
        out.println(texto);
        out.println("</textarea>");
        }catch(NumberFormatException e){
            out.println("<h1>Recuerda no dejar el campo en blanco y asegurate de que sean solo numeros</h1>");
        }
        out.println("</body>");
        out.println("</html>");
        
    }
}
