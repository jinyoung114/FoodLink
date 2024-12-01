import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1, // 구분선 두께
    borderBottomColor: "#EAEAEA", // 구분선 색상
  },
  imageContainer: {
    width: 127,
    height: 109,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D9D9D9",
  },
  imagePlaceholder: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: "#D9D9D9",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-between",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  statusIndicator: {
    width: 6,
    height: 6,
    backgroundColor: "#B1F47F",
    borderRadius: 3,
  },
  title: {
    flex: 1,
    color: "#521212",
    fontSize: 13,
    fontFamily: "Inter",
    fontWeight: "400",
    lineHeight: 18,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    marginBottom: 8,
  },
  infoText: {
    color: "#8C8C8C",
    fontSize: 11,
    fontFamily: "Inter",
    fontWeight: "400",
    lineHeight: 16,
  },
  infoSeparator: {
    color: "#8C8C8C",
    fontSize: 11,
    fontFamily: "Inter",
    fontWeight: "400",
    lineHeight: 16,
  },
  price: {
    color: "#2D754E",
    fontSize: 14,
    fontFamily: "Inter",
    fontWeight: "700",
    lineHeight: 22,
    marginBottom: 8,
  },
  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  actionText: {
    color: "#8C8C8C",
    fontSize: 12,
    fontFamily: "Inter",
    fontWeight: "400",
    lineHeight: 16,
  },
});
