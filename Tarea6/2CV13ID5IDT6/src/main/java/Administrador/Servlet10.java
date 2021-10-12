package Administrador;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author BinoDios
 */
public class Servlet10 extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Servlet10</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Servlet10 at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Progress</title>");
        out.println("</head>");
        out.println("<body>");
        try{
        Integer actual = Integer.valueOf(request.getParameter("actual"));
        Integer maximo = Integer.valueOf(request.getParameter("maximo"));
        out.println("<h1> A continuacion se muestra el estado de la barra de progreso</h1>");
        out.println("<br></br>");
        out.println("<progress max=\""+maximo+"\" value=\""+actual+"\">");
        out.println("Carga fallida");
        out.println("</progress>");
        }catch(NumberFormatException e){
            out.println("<h1>Recuerda no dejar el campo en blanco y asegurate de que sean solo numeros</h1>");
        }
        
        out.println("</body>");
        out.println("</html>");
        
    }
    
}
