/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package adminstrador;

import com.escom.ipn.cv13id28idt4.TrianguloRectangulo;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Map;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author DEZKS
 */
public class Servlet2 extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        PrintWriter out = response.getWriter();
        TrianguloRectangulo triangulo = (TrianguloRectangulo) request.getAttribute("Triangulo");
        Map<String,String> datos = triangulo.getData();
        response.setContentType("text/html;charset=UTF-8");
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Solucion</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>El triangulo queda resuelto de la siguiente manera"+"</h1>");
            out.println(datos);
            out.println("</body>");
            out.println("</html>");
    }
}
