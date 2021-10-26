/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.escom.ipn.cv13id5idp1;

import com.google.gson.Gson;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.jdom2.Element;
import org.jdom2.Document;
import org.jdom2.JDOMException;
import org.jdom2.input.SAXBuilder;
import org.jdom2.output.Format;
import org.jdom2.output.XMLOutputter;
import org.jdom2.output.SAXOutputter;
/**
 *
 * @author DEZKS
 */
public class AdminXDML {
    //private SAXBuilder builder= null;
    private Element Raiz = null;
    private Document oldDocXml = null;
    private Document newDocXml = null;
    private String RUTA = null;
    private File XmlFile = null;
    private FileOutputStream FOStream = null;
    private FileWriter fw = null;
    
    public AdminXDML(String Ruta){
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
    /*
    public AdminXDML(String Ruta, File oldXmlFile) throws JDOMException, IOException{
        builder = new SAXBuilder();
        oldDocXml = builder.build(oldXmlFile);
        this.Raiz = oldDocXml.getRootElement();
        oldXmlFile.delete();
        XmlFile = new File(RUTA);
    }*/
    /*
    public AdminXDML(File XmlFile){
        this.Raiz = new Element("RELACION_DE_COLUMNAS");
        this.XmlFile = XmlFile;
    }
    */
    private void escribir(){
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
    @Override
    public String toString(){
        return newDocXml.toString();
    }
    private void exist(){
    }
    public void addPregunta(Map<String,String> Campos, Map<String,String> RutasDrg,Map<String,String> RutasTrg){
        Element Pregunta = new Element("PREGUNTA");
        Element Drags = new Element("DRAGS");
        Element Targets = new Element("TARGETS");
        Map<String,String> DrgTxt = new HashMap<String,String>();
        Map<String,String> TrgTxt = new HashMap<String, String>();
        Iterator<Map.Entry<String,String>> iterador = Campos.entrySet().iterator();
        while(iterador.hasNext()){
            Map.Entry<String,String> entrada = iterador.next();
            if(entrada.getKey().equals("NombrePregunta")){
                Pregunta.setAttribute("ID_PREGUNTA", entrada.getValue());
            }else if(entrada.getKey().equals("Pregunta")){
                Pregunta.setAttribute(entrada.getKey(), entrada.getValue());
            }else if(entrada.getKey().equals("Respuesta")){
                Pregunta.setAttribute(entrada.getKey(), entrada.getValue());
            }else if(entrada.getKey().equals("Cantidad")){
                Pregunta.setAttribute(entrada.getKey(), entrada.getValue());
            }else if(entrada.getKey().contains("Drg")){
                DrgTxt.putIfAbsent(entrada.getKey(), entrada.getValue());
            }else if(entrada.getKey().contains("Trg")){
                TrgTxt.putIfAbsent(entrada.getKey(), entrada.getValue());
            }
        }
        Iterator<Map.Entry<String,String>> iteradorDrags = linkDrags(RutasDrg, DrgTxt).entrySet().iterator();
        while(iteradorDrags.hasNext()){
            Map.Entry<String, String> entrada =  iteradorDrags.next();
            Element opcion = new Element("OPCION");
            opcion.setAttribute("Imagen",entrada.getKey());
            opcion.setText(entrada.getValue());
            Drags.addContent(opcion);
        }
        Iterator<Map.Entry<String, String>> iteradorTargets = linkTarget(RutasTrg, TrgTxt).entrySet().iterator();
        while(iteradorTargets.hasNext()){
            Map.Entry<String, String> entrada = iteradorTargets.next();
            Element opcion = new Element("OPCION");
            opcion.setAttribute("Imagen",entrada.getKey());
            opcion.setText(entrada.getValue());
            Targets.addContent(opcion);
        }
        Pregunta.addContent(Drags);
        Pregunta.addContent(Targets);
        this.Raiz.addContent(Pregunta);
        try{
            escribir();
        }catch(RuntimeException e){
            throw new RuntimeException(e.getMessage());
        }
    }
    
    private Map<String,String> linkTarget(Map<String,String> Rutas, Map<String,String> texto){
        Iterator<Map.Entry<String,String>> iterador = Rutas.entrySet().iterator();
        Map<String,String> Opciones = new HashMap<String,String>();
        Integer i = 1;
        String txt = "TrgTxt";
        String img = "TrgImg";
        while(iterador.hasNext()){
            Map.Entry<String,String> entrada = iterador.next();
            Opciones.putIfAbsent(Rutas.get((img+i.toString())), texto.get(txt+i.toString()));
            i++;
        }
        return Opciones;
    }
    
    private Map<String,String> linkDrags(Map<String,String> Rutas, Map<String,String> texto){
        Iterator<Map.Entry<String,String>> iterador = Rutas.entrySet().iterator();
        Map<String,String> Opciones = new HashMap<String,String>();
        Integer i = 1;
        String txt = "DrgTxt";
        String img = "DrgImg";
        while(iterador.hasNext()){
            Map.Entry<String,String> entrada = iterador.next();
            Opciones.putIfAbsent(Rutas.get((img+i.toString())), texto.get(txt+i.toString()));
            i++;
        }
        return Opciones;
    }
    public String getPreguntasToJson(){
        Preguntas preguntas = new Preguntas();
        List<Element> Preguntas = Raiz.getChildren();
        Iterator<Element> iterador = Preguntas.iterator();
        while(iterador.hasNext()){
            Element Pregunta = iterador.next();
            ID_Pregunta Preguntaid = new ID_Pregunta(Pregunta.getAttributeValue("ID_PREGUNTA"));
            preguntas.setPreguntas(Preguntaid);
        }
        escribir();
        return new Gson().toJson(preguntas);
    }
    public boolean exist(String Ruta){
        return this.RUTA.equals(Ruta)?true:false;
    }
    public void searchPregunta(){
        
    }
    public void deletePregunta(String ID_PREGUNTA){
        List<Element> Preguntas = Raiz.getChildren();
        Iterator<Element> iterador = Preguntas.iterator();
        while(iterador.hasNext()){
            Element Pregunta = iterador.next();
            if(Pregunta.getAttributeValue("ID_PREGUNTA").equals(ID_PREGUNTA)){
                Pregunta.detach();
            }
        }
        escribir();
    }
    public void modifyPregunta(){
        
    }

    String getPreguntaToJson(String busca) {
        Pregunta Pregunta = new Pregunta();
        Target Target = new Target();
        Drag Drag = new Drag();
        List<Element> Preguntas = Raiz.getChildren();
        Iterator<Element> iterador = Preguntas.iterator();
        while(iterador.hasNext()){
            Element dataPregunta = iterador.next();
            if(dataPregunta.getAttributeValue("ID_PREGUNTA").equals(busca)){
                Pregunta.setID(dataPregunta.getAttributeValue("ID_PREGUNTA"));
                Pregunta.setCantidad(dataPregunta.getAttributeValue("Cantidad"));
                Pregunta.setTexto(dataPregunta.getAttributeValue("Pregunta"));
                Pregunta.setRespuesta(dataPregunta.getAttributeValue("Respuesta"));
                Element Drg = dataPregunta.getChild("DRAGS");
                List<Element>OpDrg = Drg.getChildren();
                Iterator<Element> iteradorOpDrg = OpDrg.iterator();
                while(iteradorOpDrg.hasNext()){
                    Element opcion = iteradorOpDrg.next();
                    Opciones opciones = new Opciones();
                    opciones.setRuta(opcion.getAttributeValue("Imagen"));
                    opciones.setTexto(opcion.getText());
                    Drag.setOpciones(opciones);
                }
                Element Trg = dataPregunta.getChild("TARGETS");
                List<Element>OpTrg = Trg.getChildren();
                Iterator<Element> iteradorOpTrg = OpTrg.iterator();
                while(iteradorOpTrg.hasNext()){
                    Element opcion = iteradorOpTrg.next();
                    Opciones opciones = new Opciones();
                    opciones.setRuta(opcion.getAttributeValue("Imagen"));
                    opciones.setTexto(opcion.getText());
                    Target.setOpciones(opciones);
                }
                Pregunta.setDrag(Drag);
                Pregunta.setTarget(Target);
            }
        }
        return new Gson().toJson(Pregunta);
    }
}
