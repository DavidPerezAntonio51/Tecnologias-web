/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package administrador;

import com.escom.ipn.cv13id5idp1.Clasificador;
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
public class Modify extends HttpServlet {
 // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        String Ruta = request.getServletContext().getRealPath("/");
        Clasificador gestionador = new Clasificador(request);
        try{
           if(!gestionador.isMultipart()){
               throw new RuntimeException("No hay Contenido");
           }
           gestionador.setRutaRaiz(Ruta);
           gestionador.organize();
           gestionador.editXML();
           response.sendRedirect("http://localhost:3000/");
        }catch(RuntimeException e){
            out.print(e.getMessage());
        } catch (IOException ex) {
            out.print(ex.getMessage());
        }catch(Exception exc){
            out.print(exc.getMessage());
        }
    }
}
