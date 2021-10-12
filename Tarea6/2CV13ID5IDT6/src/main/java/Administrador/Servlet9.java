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
public class Servlet9 extends HttpServlet {

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
            out.println("<title>Servlet Servlet9</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Servlet9 at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }
 @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String Obj_Solicitado = request.getParameter("Object");
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
        out.println("<!DOCTYPE html>");
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Objeto "+Obj_Solicitado+"</title>");
        out.println("</head>");
        out.println("<body>");
        try{
        Integer ancho = Integer.valueOf(request.getParameter("Ancho"));
        Integer alto = Integer.valueOf(request.getParameter("Alto"));
        out.println("<h1> A continuacion se muestra el objeto que es un pdf Solicitado</h1>");
        out.println("<br></br>");
        
        
        out.println(" <object type=\"application/pdf\" data=\""+"./Object/Ob"+Obj_Solicitado+".pdf"+"\" width=\""+ancho+"\" height=\""+alto+"\">");
        out.println("Objeto no soportado");
        out.println("</object>");
       
        }catch(NumberFormatException e){
            out.println("<h1>Recuerda no dejar el campo en blanco y asegurate de que sean solo numeros</h1>");
        }
        
        out.println("</body>");
        out.println("</html>");
        
    }
}
