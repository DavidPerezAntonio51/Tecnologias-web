/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.cv13id5idp1;

import java.io.File;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import javax.servlet.http.HttpServletRequest;

/**
 *
 * @author DEZKS
 */
public class Clasificador {
    private String RutaRaiz = null;
    private String RutaImagenes = null;
    private Map<String,String> Campos = null;
    private Map<String,FileItem> Archivos = null;
    private int maxFileSize = 50 * 1024 * 1024;
    private int maxMemSize = 4 * 1024;
    private File file = null;
    private HttpServletRequest request = null;
    private DiskFileItemFactory factory = null;
    private ServletFileUpload upload = null;

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
                    Campos.putIfAbsent(File.getFieldName(), File.getString());
                }else{
                    Archivos.putIfAbsent(File.getFieldName(), File);
                }
            }
        }catch(Exception e){
            
        }
    }
    @Override
    public String toString(){
        return Campos.toString() + Archivos.toString();
    }
}
