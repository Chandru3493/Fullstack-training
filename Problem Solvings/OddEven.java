import java.util.*;

public class OddEven {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt();
    System.out.print(num % 2 == 0 ? "Even" : "Odd");
    sc.close();
  }
}