package note;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;
import javax.ejb.EJB;
import javax.faces.bean.ManagedBean;
import javax.faces.context.FacesContext;
import javax.servlet.http.HttpSession;

import org.jboss.logging.Logger;
import org.primefaces.model.chart.PieChartModel;

import note.dao.NoteDAO;
import note.dao.StatusDAO;
import note.dao.UserDAO;
import note.entities.Note;
import note.entities.Status;
import note.entities.User;

@ManagedBean
public class MainBB {
	
	@EJB
	NoteDAO noteDAO;
	@EJB
	StatusDAO statusDAO;
	@EJB
	UserDAO userDAO;
	
	private PieChartModel pieModel1;
 
    @PostConstruct
    public void init() {
    	createPieModel1();
    }
 
    public PieChartModel getPieModel1() {
        return pieModel1;
    }
 
    private void createPieModel1() {
        pieModel1 = new PieChartModel();
        
        List<Note> notes = noteDAO.getFullList();
        long countCreated = notes.stream().filter(element -> element.getStatus().getStatus().equals("Created")).count();
        long countInProgress = notes.stream().filter(element -> element.getStatus().getStatus().equals("In_progress")).count();
        long countDone = notes.stream().filter(element -> element.getStatus().getStatus().equals("Done")).count();
        pieModel1.set("In progress", countInProgress);
        pieModel1.set("Created", countCreated);
        pieModel1.set("Done", countDone);
         
        pieModel1.setTitle("Note status statistics");
        pieModel1.setLegendPosition("w");
    }	
}
