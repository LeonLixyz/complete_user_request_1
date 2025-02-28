#include <gtk/gtk.h>

int main(int argc, char *argv[]) {
    // Initialize GTK
    gtk_init(&argc, &argv);

    // Create a top-level window
    GtkWidget *window = gtk_window_new(GTK_WINDOW_TOPLEVEL);
    gtk_window_set_title(GTK_WINDOW(window), "VPN Hello");
    gtk_window_set_default_size(GTK_WINDOW(window), 300, 200);

    // Create a label with the message
    GtkWidget *label = gtk_label_new("Hello, world!");
    gtk_container_add(GTK_CONTAINER(window), label);

    // Connect the "destroy" signal so the application quits when the window is closed
    g_signal_connect(window, "destroy", G_CALLBACK(gtk_main_quit), NULL);

    // Display all widgets
    gtk_widget_show_all(window);

    // Enter the GTK main loop
    gtk_main();
    return 0;
}
