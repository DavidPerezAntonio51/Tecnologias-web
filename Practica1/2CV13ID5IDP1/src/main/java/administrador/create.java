/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package administrador;

import com.escom.ipn.cv13id5idp1.Clasificador;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author DEZKS
 */
public class create extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)throws ServletException, IOException {
        response.setContentType("text/html;UTF-8");
        PrintWriter out = response.getWriter();
        String Ruta = request.getServletContext().getRealPath("/");
        Clasificador gestionador = new Clasificador(request);
        try{
           if(!gestionador.isMultipart()){
               throw new RuntimeException("No hay Contenido");
           }
           gestionador.organize(Ruta);
        }catch(RuntimeException e){
            
        }
    }
}
