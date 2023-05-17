import java.util.*;

public class Palindrome {
  static String palindrome(String str) {
    return str.equals(new StringBuilder(str).reverse().toString()) ? "Yes it is a Palindrome" : "Not a Palindrome";
  }

  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    System.out.print(palindrome("hey"));
    sc.close();
  }
}