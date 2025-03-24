## Get started

## 📚 Requirement
Contact Airflex Admin to get Key

> Note: Key required for authorization

## 📦 Install
```yaml
npm i reactjs-airflex
```
or
```yaml
yarn add reactjs-airflex
```
## 🔨 Usage

```tsx
import AirflexJS from 'reactjs-airflex';

function App() {
    useEffect(() => {
        if (AirflexJS) {
            AirflexJS.create("xxxx", {devmode: true});
        }
    }, []);
    /* 
        xxxx: key airflex,
        devmode: boolean 
    */
    
    .....
);
```

### Log event

```yaml
AirflexJS.logEvent("event_name");
```

```yaml
AirflexJS.logEvent("event_name", data);
```