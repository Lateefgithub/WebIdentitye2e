package indentitye2e.partA;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.ArrayList;
import java.util.List;

public class Filename_retreival {
	
	/**
	 * method to return filenames
	 */
	public static void printfilenames(){
	File dir = new File("src/main/resources/Files");
	File[] listOfFiles = dir.listFiles();
	//String filenameExtS = dir.toString();
	for(int i=0; i<listOfFiles.length; i++){
			System.out.println("Filename for file" + i +" "+listOfFiles[i].getName() );
			System.out.println("Filesize for file" + i +" "+listOfFiles[i].length() + " Bytes");
			//String filenameExt = filenameExtS+listOfFiles[i].getName();
			System.out.println("Extesion for file" + i +" "+(listOfFiles[i].getName()).substring(listOfFiles[i].getName().lastIndexOf('.')+1));
		}
}
	
	/**
	 * method to return file MIME type
	 */
	public static void printMimeTypes(){
		File dir = new File("src/main/resources/Files");
		File[] listOfFiles = dir.listFiles();
		
		 String fileType = "Undetermined";
		 	for(int i=0; i<listOfFiles.length; i++){
		 		//String filenameInString = listOfFiles[i].getName().toString();
		 		
			try {
				fileType = Files.probeContentType(listOfFiles[i].toPath());
				System.out.println(fileType);
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
					}
	}
	
	
	public static void main(String [] args){
		printfilenames();
		printMimeTypes();
	
		//System.out.println(System.getProperty("java.runtime.version"));
			}
			
	
	
	/**
	 * 
	 * 			File dir = new File("src/main/resources/Files");
			File[] listOfFiles = dir.listFiles();
			for(int i=0; i<listOfFiles.length; i++){
				if (listOfFiles[1].isFile()){
					System.out.println("File " + i +" "+listOfFiles[i].getName() );
					} else if (listOfFiles[1].isDirectory()){
					System.out.println("Directory " + i +" "+listOfFiles[i].getName() );
					}
				}
	 */
	}



	

