/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package main;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.time.LocalDate;
import java.util.Scanner;

/**
 *
 * @author Jaheer
 */
public class homework {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws FileNotFoundException, IOException {
      //1.read numbers form a file their sum//
//        Scanner sc= new Scanner(new File("numbers.txt"));
//        int sum=0;
//        while (sc.hasNextInt()) sum += sc.nextInt();
//        sc.close();
//        System.out.println("Sum = " + sum);
//    }
      //2.uppercase and store//
//        BufferedReader br = new BufferedReader(new FileReader("input.txt"));
//        BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"));
//        String line;
//        while((line = br.readLine() !=null))
//        {
//           bw.write(line.toUpperCase());
//           bw.newLine();
//        }
//        br.close();
//        bw.close();
//    }
        //3.remove extra spaces from file content//
//          BufferedReader br = new BufferedReader(new FileReader("input.txt"));
//        BufferedWriter bw = new BufferedWriter(new FileWriter("output.txt"));
//        String line;
//        while ((line = br.readLine()) != null) {
//            line = line.trim().replaceAll("\\s+", " ");
//            bw.write(line);
//            bw.newLine();
//        }
//        br.close();
//        bw.close();
        //4.display the longest word in a file
//        BufferedReader br = new BufferedReader(new FileReader("input.txt"));
//        String line, longest = "";
//        while ((line = br.readLine()) != null) {
//            for (String word : line.split("\\W+")) {
//                if (word.length() > longest.length()) longest = word;
//            }
//        }
//        br.close();
//        System.out.println("Longest word: " + longest);
        //5.write today's date into a file//
         BufferedWriter bw = new BufferedWriter(new FileWriter("date.txt"));
        bw.write(LocalDate.now().toString());
        bw.close();
        
    }
    
    
}
