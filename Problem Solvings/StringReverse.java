import java.util.*;

public class StringReverse {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    String str = sc.nextLine();
    System.out.print(new StringBuilder(str).reverse());
    sc.close();
  }
}
