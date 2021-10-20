/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package administrador;

import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author DEZKS
 */
public class create extends HttpServlet {
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    private boolean isMultipart;
   private String filePath;
   //el tamaño esta definido en bytes, la imagen de prueba pesa 2.0 Mb 2 * 1024 * 1024
   //Kb n * 1024; Mb n * 1024 * 1024; GB n * 1024 * 1024 * 1024
   private int maxFileSize = 50 * 1024 * 1024;
   private int maxMemSize = 4 * 1024;
   private File file ;
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try{
            String NombrePregunta = request.getParameter("NombrePregunta");
            String Pregunta = request.getParameter("Pregunta");
            String Respuesta = request.getParameter("Respuesta");
            List<String> DrgTexto = new ArrayList<String>();
            
            if(NombrePregunta.equals("")){
                throw new RuntimeException("Campo Nombre de Pregunta Vacio");
            }
            if(Pregunta.equals("")){
                throw new RuntimeException("Campo Pregunta Vacio");
            }
            if(Respuesta.equals("")){
                throw new RuntimeException("Campo Respuesta Vacio");
            }
        }catch(RuntimeException e){
            
        }
    }
}
