package administrador_sevlets;

import com.escom.ipn.cv13id5idt5.Gradiente_script;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author DEZKS
 */
@WebServlet(name = "Servlet3", urlPatterns = {"/Servlet3"})
public class Servlet3 extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        Gradiente_script Gradiente = new Gradiente_script();
        Gradiente.setDireccion(Integer.valueOf(request.getParameter("select")), Integer.valueOf(request.getParameter("select2")));
        
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Gradiente</title>");    
            out.println("<link rel='stylesheet' href='./cssvol3.css'>");
            out.println("</head>");
            out.println("<body>");
            out.println(" <h1>Gradiente</h1>");
            if(request.getParameter("Grad").equals("")||request.getParameter("ancho").equals("")||request.getParameter("largo").equals("")){
                out.println("Asegurate de no dejar los campos vacios");
            }else{
                try{
                    Gradiente.setIntesidad(Integer.valueOf(request.getParameter("Grad")));
                    Gradiente.setAncho(Integer.valueOf(request.getParameter("ancho")));
                    Gradiente.setLargo(Integer.valueOf(request.getParameter("largo")));
                    Gradiente.setColors(request.getParameter("Colorpri"), request.getParameter("colorsec"));
                    out.println("<canvas id=\"Gradiente\" width=\""+Gradiente.getAncho()+"\" height=\""+Gradiente.getLargo()+"\" style=\"border:1px solid #d3d3d3;\"> </canvas>");
                    out.println(Gradiente);
                }catch(NumberFormatException e){
                    out.println("Asegurate de introducir solo numeros");
                }
            }
            /************************************************************************************/
            /*****************************Boton para Regresar************************************/
            /************************************************************************************/
            out.println("<div>");
            out.println("<form method=\"Get\" action=\"Inicio\" id=\"Inicio\">");
            out.println("<input type=\"submit\" name=\"Inicio\" value=\"Regresar\" form=\"Inicio\"/>");
            out.println("</form>");
            out.println("</div>");
            out.println("</body>");
            out.println("</html>");
        }
    }
}
