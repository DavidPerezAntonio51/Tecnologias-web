/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Administrador;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author DEZKS
 */
public class Servlet1 extends HttpServlet {
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
        String Etiqueta = request.getParameter("Etiqueta");
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("Hola mundo");
        RequestDispatcher redireccionador = null;
        if(Etiqueta.equals("Video")){
            redireccionador = request.getRequestDispatcher("Servlet2");
        }
        if(Etiqueta.equals("Audio")){
            redireccionador = request.getRequestDispatcher("Servlet3");
        }
        if(Etiqueta.equals("Imagen")){
            redireccionador = request.getRequestDispatcher("Servlet4");
        }
        if(Etiqueta.equals("TextArea")){
            redireccionador = request.getRequestDispatcher("Servlet5");
        }
        if(Etiqueta.equals("Article")){
            redireccionador = request.getRequestDispatcher("Servlet6");
        }
        if(Etiqueta.equals("Cite")){
            redireccionador = request.getRequestDispatcher("Servlet7");
        }
        if(Etiqueta.equals("Embed")){
            redireccionador = request.getRequestDispatcher("Servlet8");
        }
        if(Etiqueta.equals("Object")){
            redireccionador = request.getRequestDispatcher("Servlet9");
        }
        if(Etiqueta.equals("Progress")){
            redireccionador = request.getRequestDispatcher("Servlet10");
        }
        redireccionador.forward(request, response);
    }
}
