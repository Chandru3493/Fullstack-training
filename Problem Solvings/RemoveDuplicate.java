import java.util.*;

public class RemoveDuplicate {
  public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    ArrayList<Integer> list = new ArrayList<>(Arrays.asList(11, 11, 1, 2, 3, 4, 5, 5, 3, 2, 1, 2));
    Set<Integer> set = new LinkedHashSet<>(list);
    list = new ArrayList<>(set);
    System.out.println(list);
    sc.close();
  }
}
