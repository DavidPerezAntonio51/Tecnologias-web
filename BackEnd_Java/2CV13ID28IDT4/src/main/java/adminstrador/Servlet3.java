/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package adminstrador;

import com.escom.ipn.cv13id28idt4.TrianguloRectangulo;
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
public class Servlet3 extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        PrintWriter out = response.getWriter();
        TrianguloRectangulo triangulo = (TrianguloRectangulo) request.getAttribute("Triangulo");
        response.setContentType("text/html;charset=UTF-8");
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Servlet3</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>No se puede resolver 20"+"</h1>");
            out.println("</body>");
            out.println("</html>");
    }

}
