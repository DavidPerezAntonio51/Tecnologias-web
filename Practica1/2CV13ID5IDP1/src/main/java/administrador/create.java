/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package administrador;

import com.escom.ipn.cv13id5idp1.Clasificador;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
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
           gestionador.setRutaRaiz(Ruta);
           gestionador.organize();
           gestionador.saveFiles();
           gestionador.addDatatoXML();
           response.sendRedirect("index.html");
        }catch(RuntimeException e){
            out.print(e.getMessage());
        } catch (IOException ex) {
            out.print(ex.getMessage());
        }catch(Exception exc){
            out.print(exc.getMessage());
        }
    }
}
