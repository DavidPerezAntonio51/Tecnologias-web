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
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException{
        PrintWriter out = response.getWriter();
        TrianguloRectangulo triangulo = new TrianguloRectangulo();
        triangulo.setData(request.getParameterMap());
        request.setAttribute("Triangulo", triangulo);
        if(triangulo.sePuedeResolver()){
            RequestDispatcher rd = request.getRequestDispatcher("Solucion");
            rd.forward(request, response);
        }else{
            RequestDispatcher rd = request.getRequestDispatcher("Error");
            rd.forward(request, response);
        }
    }
}
