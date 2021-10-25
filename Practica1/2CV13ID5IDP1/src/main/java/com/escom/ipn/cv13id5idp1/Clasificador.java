/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.cv13id5idp1;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import javax.servlet.http.HttpServletRequest;
import org.w3c.dom.*;
import javax.xml.*;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.apache.commons.io.FileUtils;
import org.jdom2.JDOMException;


/**
 *
 * @author DEZKS
 */
public class Clasificador {
    private final String DRAG = "Drags\\";
    private final String TARGET = "Targets\\";
    private String RutaRaiz = null;
    private String RutaImagenes = null;
    private Map<String,String> RutaDrg = null;
    private Map<String,String> RutaTrg = null;
    private Map<String,String> Campos = null;
    private Map<String,FileItem> Archivos = null;
    private int maxFileSize = 50 * 1024 * 1024;
    private int maxMemSize = 4 * 1024;
    private File file = null;
    private HttpServletRequest request = null;
    private DiskFileItemFactory factory = null;
    private ServletFileUpload upload = null;
    private AdminXDML Admin = null;

    public Clasificador(HttpServletRequest request) {
        this.request = request;
    }
    public boolean isMultipart(){
        return ServletFileUpload.isMultipartContent(request);
    }
    public void setMaxMemSize(Integer MemSize){
        this.maxMemSize = MemSize;
    }
    public void setMaxFileSize(Integer FileSize){
        this.maxFileSize = FileSize;
    }
    public void organize(String Ruta){
        this.RutaRaiz = Ruta;
        Campos = new HashMap<String, String>();
        Archivos = new HashMap<String,FileItem>();
        factory = new DiskFileItemFactory();
        factory.setSizeThreshold(maxMemSize);
        factory.setRepository(new File(Ruta));
        upload = new ServletFileUpload(factory);
        upload.setFileSizeMax(maxFileSize);
        try{
            Iterator iterador = upload.parseRequest(request).iterator();
            while(iterador.hasNext() ){
                FileItem File = (FileItem) iterador.next();
                if(File.isFormField()){
                    if(File.getString("UTF-8").equals("")){
                        throw new RuntimeException("El Campo " + File.getFieldName() + " esta Vacio");
                    }
                    Campos.putIfAbsent(File.getFieldName(), File.getString("UTF-8"));
                }else{
                    if(File.getName().equals("")){
                        throw new RuntimeException("Olvidaste Subir un Archivo");
                    }
                    Archivos.putIfAbsent(File.getFieldName(), File);
                }
            }
            createRuta();
        }catch(Exception e){
            throw new RuntimeException(e.getMessage());
        }
    }

    public void setRutaRaiz(String RutaRaiz) {
        this.RutaRaiz = RutaRaiz;
    }
    
    private void createRuta(){
        String NombrePregunta = Campos.get("NombrePregunta");
        RutaImagenes = RutaRaiz + "Imagenes\\" +NombrePregunta + "\\";
        //RutaAPP\Imagenes\Pregunta1\Target
        //--------------------------\Drags\Imagen1.jpg
    }
    public void saveFiles() throws Exception{
        Iterator<Map.Entry<String,FileItem>> iterador = this.Archivos.entrySet().iterator();
        RutaDrg = new HashMap<String,String>();
        RutaTrg = new HashMap<String,String>();
        while(iterador.hasNext()){
            Map.Entry<String,FileItem> entrada = iterador.next();
            if(entrada.getKey().contains("Drg")){
                FileItem File = entrada.getValue();
                String RutaArchivo = this.RutaImagenes + DRAG + File.getName();
                this.file = new File(RutaArchivo);
                file.getParentFile().mkdirs();
                RutaDrg.putIfAbsent(entrada.getKey(), RutaArchivo);
                File.write(file);
            }else if(entrada.getKey().contains("Trg")){
                FileItem File = entrada.getValue();
                String RutaArchivo = this.RutaImagenes + TARGET + File.getName();
                this.file = new File(RutaArchivo);
                file.getParentFile().mkdirs();
                RutaTrg.putIfAbsent(entrada.getKey(), RutaArchivo);
                File.write(file);
            }
        }
    }
    public void addDatatoXML(){
        //D:\GIT\Tecnologias-web\Practica1\2CV13ID5IDP1\target\2CV13ID5IDP1-1.0-SNAPSHOT\Data\data.xml
        String RutaXml = RutaRaiz+"Data\\data.xml";
        try{
        Admin = new AdminXDML(RutaXml);
        Admin.addPregunta(Campos, RutaDrg, RutaTrg);
        }catch(RuntimeException e){
            throw new RuntimeException(e.getMessage());
        }
    }
    public String getQuetions(){
        String RutaXml = RutaRaiz+"Data\\data.xml";
        try{
        Admin = new AdminXDML(RutaXml);
        return Admin.getPreguntasToJson();
        }catch(RuntimeException e){
            return e.getMessage();
        }
    }
    public void deleteQuestion(String Pregunta){
        String RutaXml = RutaRaiz+"Data\\data.xml";
        try{
        Admin = new AdminXDML(RutaXml);
        Admin.deletePregunta(Pregunta);
        }catch(RuntimeException e){
            throw  new RuntimeException(e.getMessage());
        }
        
        try {
            FileUtils.deleteDirectory(new File(RutaRaiz+"Imagenes\\" + Pregunta + "\\"));
        } catch (IOException ex) {
            throw new RuntimeException();
        }
    }
    @Override
    public String toString(){
        return this.Admin.toString();
    }
}
