import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    flexDirection: "column",
    height: "100%",
    justifyContent: "flex-start", // 화면 상단부터 정렬
    position: "relative",
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#ffffff", // 안전 영역과 일관된 배경색
  },
  
  header: {
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 40,
    marginBottom: 15,
    marginStart:10,
  },
  navigateButton: {
    marginRight: 1, // 버튼과 텍스트 간격
  },
  headerText: {
    color: "#000000",
    fontFamily: "Inter-Bold",
    fontSize: 32,
    fontWeight: "700",
    lineHeight: 40,
    marginTop: 70,
    marginBottom: 10,
  },
  form: {
    alignItems: "center",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingBottom: 10,
  },
  label: {
    color: "#2d754e",
    fontFamily: "Noto Sans-Bold",
    fontSize: 12,
    fontWeight: "700",
    width: 307,
  },
  inputBox: {
    borderColor: "#2d754e",
    borderWidth: 1,
    borderRadius: 15,
    height: 40,
    width: 307,
    paddingHorizontal: 10,
  },
  dropdownContainer: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },
  dropdownItem: {
    borderColor: "#2d754e",
    borderWidth: 1,
    borderRadius: 15,
    height: 40,
    width: 80,
    paddingHorizontal: 12,
    textAlign: "center",
  },
  buttonWrapper: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    paddingBottom: 20,
  },
  buttonContainer: {
    backgroundColor: "#2d754e",
    borderRadius: 15,
    height: 40,
    width: 307,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },
  
  rectangle: {
    backgroundColor: "#2d754e",
    borderRadius: 5,
    height: 2,
    width: 304,
    marginTop: 10,
    marginBottom:20,
  },
});
