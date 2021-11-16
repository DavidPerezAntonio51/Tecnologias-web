/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.cv13id5idp3;

import JsonTemplates.Pointer;
import com.google.gson.Gson;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import org.jdom2.Element;
import org.jdom2.Document;
import org.jdom2.JDOMException;
import org.jdom2.input.SAXBuilder;
import org.jdom2.output.Format;
import org.jdom2.output.XMLOutputter;

/**
 *
 * @author DEZKS
 */
public class AdminXML {
    private Element Raiz = null;
    private Document oldDocXml = null;
    private Document newDocXml = null;
    private String RUTA = null;
    private File XmlFile = null;
    private FileOutputStream FOStream = null;
    private FileWriter fw = null;
    
    public AdminXML(String Ruta){
        XmlFile = new File(Ruta);
        if(XmlFile.exists()){
            try {
                SAXBuilder builder =  new SAXBuilder();
                oldDocXml = builder.build(XmlFile);
                Raiz = oldDocXml.detachRootElement();
            } catch (JDOMException ex) {
                throw new RuntimeException(ex.getMessage());
            } catch (IOException ex) {
                throw new RuntimeException(ex.getMessage());
            }
        }else{
            this.Raiz = new Element("RELACION_DE_COLUMNAS");
            this.RUTA = Ruta;
        }
    }
    public void escribir(){
        this.newDocXml = new Document(Raiz);
        XmlFile.getParentFile().mkdirs();
        XMLOutputter outputter = new XMLOutputter();
        outputter.setFormat(Format.getPrettyFormat());
        //FOStream = new FileOutputStream(XmlFile);
        try{
            outputter.output(newDocXml, new FileOutputStream(XmlFile));
        }catch(IOException e){
            throw new RuntimeException(e.getMessage());
        }
    }
    public String getPointersToJson(){
        Collection Pointers = new ArrayList();
        List<Element> Punteros = Raiz.getChildren();
        Iterator<Element> i = Punteros.iterator();
        while(i.hasNext()){
            Element puntero = i.next();
            Pointer pointer = new Pointer();
            pointer.setNombre(puntero.getAttributeValue("name"));
            pointer.setRuta(puntero.getAttributeValue("Ruta"));
            Pointers.add(pointer);
        }
        escribir();
        return new Gson().toJson(Pointers);
    }
}
