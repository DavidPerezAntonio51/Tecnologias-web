/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package adminstrador;

import com.escom.ipn.cv13id28idt4.TrianguloRectangulo;
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
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
            PrintWriter out = response.getWriter();
            Integer catetoO = (Integer) request.getAttribute("CatetoOpuesto");
            Integer catetoA = (Integer) request.getAttribute("CatetoAdyacente");
            response.setContentType("text/html;charset=UTF-8");
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Servlet3</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Hola mundo desde servlet3"+"</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        PrintWriter out = response.getWriter();
        TrianguloRectangulo triangulo1 = new TrianguloRectangulo();
        triangulo1.setData(request.getParameterMap());
        if(triangulo1.sePuedeResolver()){
            response.setContentType("text/html;charset=UTF-8");
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Servlet3</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Se puede resolver"+"</h1>");
            out.println("</body>");
            out.println("</html>");
        }else{
            response.setContentType("text/html;charset=UTF-8");
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Servlet3</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>No se puede resolver"+"</h1>");
            out.println("</body>");
            out.println("</html>");
        }
        
    }

}
