/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Administrador;

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
public class Servlet6 extends HttpServlet {
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
        String Titulo = request.getParameter("Titulo");
        String Texto = request.getParameter("Articulo");
        String Pie = request.getParameter("Pie");
        StringTokenizer tokens= new StringTokenizer(Texto,"/");
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>TextArea</title>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1> A continuacion se muestra la publicacion de tu articulo</h1>");
        out.println("<br></br>");
        out.println("<article>");
        out.println("<header>");
        out.println("<h1>"+Titulo+"</h1>");
        out.println("</header>");
        while(tokens.hasMoreElements()){
            out.println("<p>");
            out.println(tokens.nextElement());
            out.println("</p>");
        }
        out.println("<footer>");
        out.println(Pie);
        out.println("</footer>");
        out.println("</article>");
        out.println("</body>");
        out.println("</html>");
        
    }
}
