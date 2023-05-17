import java.util.*;

public class PositiveNegative {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    int num = sc.nextInt();
    System.out.print(num > 0 ? "Positive" : "Negative");
    sc.close();
  }
}
