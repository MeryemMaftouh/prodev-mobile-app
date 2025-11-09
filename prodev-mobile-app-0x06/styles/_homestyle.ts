import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  searchGroup: {
    padding: 16,
    backgroundColor: "#fff",
  },

  searchFormGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  searchControlGroup: {
    flex: 1,
    flexDirection: "column",
    marginRight: 8,
  },

  searchFormText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },

  searchControl: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop: 4,
    color: "#000",
  },

  searchButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#34967C",
    alignItems: "center",
    justifyContent: "center",
  },

  filterGroup: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    columnGap: 12,
    alignItems: "center",
  },

  filterContainer: {
    width: 80,
    height: 60,
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  listingContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
  },

  paginationContainer: {
    marginVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },

  showMoreButton: {
    backgroundColor: "#34967C",
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 24,
  },

  showMoreButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export { styles };
